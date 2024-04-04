defmodule G1Tkit.Repo do
  use Ecto.Repo,
    otp_app: :g1_tkit,
    adapter: Ecto.Adapters.Postgres
end
