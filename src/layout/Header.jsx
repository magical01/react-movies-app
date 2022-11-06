export function Header() {
  return <header className="header bg-sky-600 h-20 shadow-xl">
    <div className="container mx-auto flex justify-between px-5 items-center h-full">
      <a className="header__link font-sans text-3xl text-white" href="#">React Movies App</a>
      <a className="header__link font-sans text-lg text-white" href="https://github.com/magical01/react-movies-app" target={"_blank"}>Repository</a>
    </div>
  </header>
}
