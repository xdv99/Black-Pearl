function NavItem({ title, link }) {
  return (
    <a
      href={link}
      className="block p-2 hover:text-[#C0434B] hover:border-b-2 hover:border-b-[#C0434B]"
    >
      <li>{title}</li>
    </a>
  );
}

export default NavItem;
