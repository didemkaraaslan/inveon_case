import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography color="primary" variant="h1" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Typography color="secondary" variant="h1" component="h1" gutterBottom>
          Secondary
        </Typography>
      </Box>
    </Container>
  );
}
