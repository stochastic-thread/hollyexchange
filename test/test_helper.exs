ExUnit.start

Mix.Task.run "ecto.create", ~w(-r HollyExchange.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r HollyExchange.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(HollyExchange.Repo)

