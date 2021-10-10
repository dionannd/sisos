import React from "react";
import { Helmet } from "react-helmet";
import { AuthLayout } from "../../components";
import { Center } from "@chakra-ui/react";

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <AuthLayout>
        <Center>Sign Up</Center>
      </AuthLayout>
    </>
  );
}
