defmodule G1TkitWeb.HomeLive do
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
    <div class="flex flex-row">
    <!-- Modal toggle -->
    <button
      class="block text-white bg-blue-700 m-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      phx-click="goto-game"
    >
      Start Game
    </button>
    <!-- Main modal -->
    <button
      type="button"
      class="block text-white bg-blue-700 m-1  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      phx-click={show_modal("new-post-modal")}
    >
      New Post
    </button>
    </div>

    <div id="feed" phx-update="stream" class="flex flex-col gap-2">
      <div
        :for={{dom_id, post} <- @streams.posts}
        id={dom_id}
        class="w-1/2 mx-auto flex flex-col gap-2 border rounded p-4"
      >
        <img src={post.image_path} />
        <p><%= post.user.email %></p>
        <p><%= post.caption %></p>
      </div>
    </div>
    <.modal id="new-post-modal">
      <.simple_form for={@form} phx-change="validate" phx-submit="save-post">
        <.live_file_input upload={@uploads.image} required />
        <.input field={@form[:caption]} type="textarea" label="Caption" required />
        <.button type="submit" phx-disable-with="Saving...">Create Post</.button>
      </.simple_form>
    </.modal>
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


  @impl true
  def handle_event("goto-game", _params, socket) do
    socket = 
      socket
      |> push_navigate(to: ~p"/game")

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
