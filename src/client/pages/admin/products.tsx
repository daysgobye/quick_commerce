import { Page } from "../../app";
import AdminLayout from "../../components/adminLayout";
import CreateProduct from "../../components/createProduct";

const AdminProducts = () => {
    return (
        <Page title="Home">
            <AdminLayout>
                <h1>Products</h1>
                <details >
                    <summary>New Product</summary>
                    <CreateProduct />
                </details>

                <hr />

                <details open>
                    <summary>All Products</summary>
                    <ul>
                        <li>...</li>
                        <li>...</li>
                    </ul>
                </details>
            </AdminLayout>
        </Page>
    )
}
export default AdminProducts;