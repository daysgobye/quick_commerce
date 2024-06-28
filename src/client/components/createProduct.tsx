
const CreateProduct = () => {
    return (
        <form method="post" action="/admin/products">
            <fieldset>
                <select name="status" aria-label="product status" required>
                    <option selected disabled value="">
                        set product status
                    </option>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="unlisted" >Unlisted</option>
                    <option value="archived">Archived</option>
                </select>
                <label>
                    Title
                    <input
                        name="title"
                        placeholder="cool product"
                    />
                </label>
                <label>
                    Handle
                    <input
                        name="handle"
                        placeholder="cool-product"
                    />
                </label>
                <textarea
                    name="Description"
                    placeholder="description with html support"
                    aria-label="product description with html support"
                >
                </textarea>
            </fieldset>

            <input
                type="submit"
                value="Create Product"
            />
        </form>
    )
}
export default CreateProduct;