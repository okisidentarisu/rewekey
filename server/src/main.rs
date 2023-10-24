use agql::{
    http::{playground_source, GraphQLPlaygroundConfig},
    EmptySubscription, Schema,
};
use async_graphql as agql;
use async_graphql_rocket::{GraphQLQuery, GraphQLRequest, GraphQLResponse};
use model::{mutation::Mutation, query::QueryRoot, RewekeySchema};
use rocket::{response::content, State};
use sqlx::postgres::PgPoolOptions;

mod db;
mod model;

#[rocket::get("/")]
fn graphql_playground() -> content::RawHtml<String> {
    content::RawHtml(playground_source(GraphQLPlaygroundConfig::new("/graphql")))
}

#[rocket::get("/graphql?<query..>")]
async fn graphql_query(schema: &State<RewekeySchema>, query: GraphQLQuery) -> GraphQLResponse {
    query.execute(schema).await
}

#[rocket::post("/graphql", data = "<request>", format = "application/json")]
async fn graphql_request(
    schema: &State<RewekeySchema>,
    request: GraphQLRequest,
) -> GraphQLResponse {
    request.execute(schema).await
}

#[rocket::launch]
async fn rocket() -> _ {
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect("postgres:///rewekey_dev")
        .await
        .unwrap();
    let schema = Schema::build(QueryRoot, Mutation, EmptySubscription)
        .data(pool)
        .finish();
    rocket::build().manage(schema).mount(
        "/",
        rocket::routes![graphql_query, graphql_request, graphql_playground],
    )
}
