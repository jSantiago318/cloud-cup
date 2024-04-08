defmodule G1TkitWeb.GameLive do
  use G1TkitWeb, :live_view
  alias G1Tkit.Posts.Post
  alias G1Tkit.Posts

  @impl true
  def render(%{loading: true} = assigns) do
    ~H"""
    <h1>Loading...</h1>
    """
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div id="phaser" ref="phaser"></div>
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    if connected?(socket) do
      form =
        %Post{}
        |> Post.changeset(%{})
        |> to_form(as: "post")

      socket =
        socket
        |> assign(form: form, loading: false)
        |> allow_upload(:image, accept: ~w(.png .jpg), max_entries: 1)
        |> stream(:posts, Posts.list_posts())

      {:ok, socket}
    else
      {:ok, assign(socket, loading: true)}
    end
  end

  @impl true
  def handle_event("validate", _params, socket) do
    {:noreply, socket}
  end

  def handle_event("save-post", %{"post" => post_params}, socket) do
    %{current_user: user} = socket.assigns

    post_params
    |> Map.put("user_id", user.id)
    |> Map.put("image_path", List.first(consume_files(socket)))
    |> Posts.save()
    |> case do
      {:ok, _post} ->
        socket =
          socket
          |> put_flash(:info, "Post created sucessfuly!")
          |> push_navigate(to: ~p"/home")

        {:noreply, socket}

      {:error, _changeset} ->
        {:noreply, socket}
    end
  end

  defp consume_files(socket) do
    consume_uploaded_entries(socket, :image, fn %{path: path}, _entry ->
      dest = Path.join([:code.priv_dir(:g1_tkit), "static", "uploads", Path.basename(path)])
      File.cp!(path, dest)
      {:postpone, ~p"/uploads/#{Path.basename(path)}"}
    end)
  end
end
