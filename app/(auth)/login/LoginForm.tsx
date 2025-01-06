"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  Input,
} from "@nextui-org/react";
import React from "react";
import { GiPadlock } from "react-icons/gi";

const LoginForm = () => {
  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-secondary">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <p className="text-neutral-500">Welcome back to AprilMatch</p>
        </div>
      </CardHeader>
      <CardBody>
        <Form className="w-full">
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Enter your email address"
            labelPlacement="outside"
            name="email"
            type="email"
            variant="bordered"
          ></Input>
          <Input
            isRequired
            errorMessage="Please enter a valid password"
            label="Enter your password"
            labelPlacement="outside"
            name="password"
            type="password"
            variant="bordered"
          ></Input>
          <Button fullWidth color="secondary" type="submit" className="mt-6">
            Login
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
