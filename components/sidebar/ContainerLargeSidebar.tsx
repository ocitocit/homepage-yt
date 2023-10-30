interface ContainerLargeSidebarProps {
  children: React.ReactNode;
}
const ContainerLargeSidebar: React.FC<ContainerLargeSidebarProps> = ({
  children
}) => {
  return <div>{children}</div>;
};

export default ContainerLargeSidebar;
