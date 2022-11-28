import React from "react";
import { Container, Stack } from "react-bootstrap";

const Header = () => {
    return (
        <header className="py-5">
            <Container>
                <Stack
                    direction="horizontal"
                    className="justify-content-center"
                >
                    Copyright by Ba Nguyễn
                </Stack>
            </Container>
        </header>
    );
};

export default Header;
