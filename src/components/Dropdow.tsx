export function DropdownUser() {
  return (
    <div className="absolute top-14 w-36 p-1 overflow-hidden bg-white rounded">
      <a
        href="/perfil"
        className="text-gray-800 text-sm h-12 flex items-center p-2 transform rounded translate-x-px"
      >
        <img
          className="m-0"
          src="https://img.icons8.com/external-anggara-detail-outline-anggara-putra/20/000000/external-user-contact-us-anggara-detail-outline-anggara-putra.png"
        />
        <span className="ml-6">Perfil</span>
      </a>
      <a
        href="#"
        className="text-gray-800 text-sm h-12 flex items-center p-2 transform rounded translate-x-px"
      >
        <span className="ml-12">Sair</span>
      </a>
    </div>
  );
}