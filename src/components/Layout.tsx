type LayoutProps = {
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div style={{backgroundColor:"#34ebd8"}}>
        <h1>Welcome Layout</h1>
        {props.children}
    </div>
  )
}

export default Layout