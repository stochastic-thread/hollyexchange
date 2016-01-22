defmodule HollyExchange.PageController do
  use HollyExchange.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
