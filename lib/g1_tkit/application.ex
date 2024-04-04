defmodule G1Tkit.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      G1TkitWeb.Telemetry,
      G1Tkit.Repo,
      {DNSCluster, query: Application.get_env(:g1_tkit, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: G1Tkit.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: G1Tkit.Finch},
      # Start a worker by calling: G1Tkit.Worker.start_link(arg)
      # {G1Tkit.Worker, arg},
      # Start to serve requests, typically the last entry
      G1TkitWeb.Endpoint    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: G1Tkit.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    G1TkitWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
