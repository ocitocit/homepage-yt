import SmallSidebar from './SmallSidebar';

const SideBar = () => {
  return (
    <aside
      className="
      top-0
      sticky
      overflow-y-auto
      scrollbar-hidden
      pb-4
      ml-1
      flex
      flex-col
      lg:hidden
      "
    >
      <SmallSidebar />
    </aside>
  );
};

export default SideBar;
