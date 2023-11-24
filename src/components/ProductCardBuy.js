import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsTrash2 } from "react-icons/bs";
import Image from 'react-bootstrap/Image';

const ProductCardBuy = ({ product }) => {

    const deleteProduct = async (id) => {
        try {
            let confirm = window.confirm("confirm delete this product?");
            if (confirm) {
                fetch(`http://localhost:3000/buyList/${id}`, {
                    method: "DELETE",
                })
                    .then(toast.success("This product has been deleted successfully"))
                setInterval(() => {
                    window.location.reload()    
                }, 1000);

            } else {
                toast.error("Action Denied!")
            }
        } catch (e) {
            toast.error("error: " + e)
        }
    }

    return (
        <>
            <Card className='productCardBuy' >
                <Card.Body>
                    <Card.Title style={{ color: "Red" }}><strong>{product.data.name}</strong></Card.Title>
                    <Image src={product.data.image} thumbnail alt={product.data.name} />
                    <Card.Text>Price: {product.data.price} </Card.Text>
                    <Card.Text> Delivery: {product.data.freeDelivery}</Card.Text>
                    <Card.Text> Amount: {product.data.amount}</Card.Text>
                    <Button variant="outline-danger" onClick={() => deleteProduct(product.id)}><BsTrash2 /></Button>
                </Card.Body>
            </Card>
            <ToastContainer />
        </>
    )
}
export default ProductCardBuy