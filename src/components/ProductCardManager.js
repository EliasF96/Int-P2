
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from "react-toastify"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';


    const ProductCardBuy = ({product})=>{
        const deleteProduct = async()=>{ 
            try{
                let confirm = window.confirm("confirm delete this product?");
                if(confirm){
                    fetch(`https://65399380e3b530c8d9e885df.mockapi.io/bakery/products/${product.id}`, {
                            method: "DELETE",
                        })
                        .then(toast.success("This product has been deleted successfully"))
                        setInterval(() => {
                            window.location.reload()    
                        }, 1000);
                        
                    }else{
                        toast.error("Action Denied!")
                    }
            }   catch(e){
                toast.error("error: "+e)
            }
        }
    
        return(
            <>
                <Card className='productCard' >
                <Card.Body>
                <Card.Text ><strong>IDProduct: </strong>{product.id} </Card.Text>
                <Card.Title style={{color:"Red"}}><strong>{product.name}</strong></Card.Title>
                <Card.Text ><strong>Image: </strong>{product.image} </Card.Text>
                <Card.Text ><strong>Price: </strong>{product.price} </Card.Text>
                <Card.Text><strong>Stock: </strong>{product.stock} </Card.Text>
                <Card.Text> <strong>Mark: </strong>{product.mark}</Card.Text>
                <Card.Text> <strong>Category: </strong>{product.category}</Card.Text>
                <Card.Text> <strong>S.Description: </strong>{product.descShort}</Card.Text>
                <Card.Text> <strong>Delivery: </strong>{product.freeDelivery}</Card.Text>
                <Card.Text> <strong>Age Since: </strong>{product.ageSince}</Card.Text>
                <Card.Text> <strong>Age Until: </strong>{product.ageUntil}</Card.Text>
                <Card.Text><strong>Large Desc:</strong>{product.descLarge}</Card.Text>

                <Button variant="outline-danger" onClick={deleteProduct}>Delete Item</Button>
            </Card.Body>
            </Card>
            <ToastContainer/>
        </>
        )
    }
export default ProductCardBuy