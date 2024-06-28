const Layout = ({ children }: { children: any }) => {

    return (
        <main class="container">
            <nav>
                <ul>
                    <li><strong>Testing Store</strong></li>
                </ul>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Products</a></li>
                </ul>
            </nav>
            {children}
        </main>
    )
}
export default Layout;