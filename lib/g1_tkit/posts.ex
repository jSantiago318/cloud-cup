defmodule G1Tkit.Posts do
  import Ecto.Query, warn: false

  alias G1Tkit.Posts.Post
  alias G1Tkit.Repo

  def list_posts do
    query =
      from p in Post,
        select: p,
        order_by: [desc: :inserted_at],
        preload: [:user]

    Repo.all(query)
  end

  def save(post_params) do
    %Post{}
    |> Post.changeset(post_params)
    |> Repo.insert()
  end
end
