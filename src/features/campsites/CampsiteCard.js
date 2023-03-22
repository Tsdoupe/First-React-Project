import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import {Link} from 'react-router-dom';

const CampsiteCard = ({campsite}) => {
    const {id, image, name } = campsite;
    return (
        <Card>
            <Link to={`${id}`}>
                <CardImg width = "100%" src={campsite.image} alt={campsite.name}/>
                <CardImgOverlay>
                    <CardTitle> 
                        {campsite.name}
                    </CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
};

export default CampsiteCard;