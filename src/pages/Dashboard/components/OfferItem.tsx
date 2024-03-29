import { Offer } from "../../../components/EntityTypes"
import { Button, Card, message, Input } from "antd"
import { DeleteTwoTone } from "@ant-design/icons"
import { useContext } from "react";
import { authContext } from "../../../contexts/AuthenticationContext";

export const OfferItem: React.FC<{ offer: Offer, fetchOffers: () => void }> = ({ offer, fetchOffers }) => {
    const token = useContext(authContext);

    const copyLink = () => {
        navigator.clipboard.writeText(offer.link);
        message.success("Link copied!", 2);
    }

    const deleteOffer = async () => {
        const userId = token.actions.getTokenData()?.id;
        await fetch(`/api/user/${userId}/eventType/${offer.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        fetchOffers();
    }

    const { TextArea } = Input;

    return (
        <Card
            title={offer.title}
            extra={<Button><DeleteTwoTone onClick={deleteOffer} /></Button>}
            style={{ display: 'inline-block', width: 300, minHeight: 200, margin: 8 }}
        >
            <div style={{ textAlign: 'center' }}>
                <TextArea value={offer.description} style={{ border: 'none', textAlign: 'center', minHeight: 70 }} readOnly></TextArea>
                <div style={{ margin: 10 }}>{offer.duration} minutes</div>
                <Button type='primary' onClick={copyLink} style={{ margin: 10 }}>
                    Copy Link
                </Button>
            </div>
        </Card>
    )
}