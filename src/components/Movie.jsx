export function Movie (props) {
  const {Title, Year, imdbId, Type, Poster} = props;

  return <a id={imdbId} href="#" className="group relative block bg-black">
  <img
    alt={Title}
    src={Poster}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-sky-400">
      {Type}
    </p>

    <p className="text-2xl font-bold text-white">{Title}</p>
    <p className="text-xl font-bold text-white">{Year}</p>

    <div className="mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
}