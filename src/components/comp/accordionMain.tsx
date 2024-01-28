import Accordion from 'react-bootstrap/Accordion';

function AccordionMain() {
    return (
        <>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can I purchase games on Game Inn?</Accordion.Header>
                    <Accordion.Body>
                        Purchasing games on Game Inn is simple! Navigate to our product pages, select the games you want, and proceed to checkout. Follow the easy steps to complete your purchase securely.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are my transactions on Game Inn secure?</Accordion.Header>
                    <Accordion.Body>
                        Absolutely. Game Inn prioritizes your security. We use state-of-the-art encryption and secure payment gateways to ensure that your transactions are safe and protected.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Can I return or exchange a game?</Accordion.Header>
                    <Accordion.Body>
                        Yes, Game Inn offers a hassle-free return and exchange policy. If you encounter any issues or change your mind, check our Returns & Exchanges policy for more details.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How can I join the Game Inn community?</Accordion.Header>
                    <Accordion.Body>
                        Joining our community is easy! Simply create an account on Game Inn, and you'll gain access to forums, discussions, and updates on the latest gaming trends. Connect with like-minded gamers today!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export { AccordionMain }