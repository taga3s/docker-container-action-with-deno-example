const SECRET_KEY = Deno.env.get('SECRET_KEY') ?? ''
// const MESSAGE = Deno.args[0] ?? ''

function main() {
  if (SECRET_KEY === "secret_key") {
    console.log("TEST2")
  }
}

main()
