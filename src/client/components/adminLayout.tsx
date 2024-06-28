const AdminLayout = ({ children }: { children: any }) => {
    const pages = [{ title: "Dashboard", href: "/admin" },
    { title: "Products", href: "/admin/products" },
    { title: "Orders", href: "/admin/orders" }
    ]
    return (
        <main class="container">
            <nav>
                <ul>
                    <li><strong>Admin View</strong></li>
                </ul>
                <ul>
                    {pages.map(page =>
                        <li><a href={page.href}>{page.title}</a></li>
                    )
                    }
                </ul>
            </nav>
            {children}
        </main>
    )
}
export default AdminLayout;