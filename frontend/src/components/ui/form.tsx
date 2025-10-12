"use client";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { useState } from "react";
import { submitAddress } from "@/app/contact-us/actions";
import { ActionResponse } from "@/lib/definitions";
import { useActionState } from "react";
import clsx from "clsx";

const initialState: ActionResponse = {
    success: false,
    message: "",
};

export default function Form() {
    const [state, action, isPending] = useActionState(
        submitAddress,
        initialState,
    );

    return (
        <Card className="bg-tavo-dark mx-auto w-full max-w-lg rounded-xl border-2 shadow-sm">
            <CardHeader>
                <h1 className="text-tavo-light text-7xl leading-none font-black uppercase">
                    Contact Us
                </h1>
                <p className="text-tavo-light text-sm">
                    Please enter your messages below.
                </p>
            </CardHeader>
            <CardContent>
                <form action={action} className="space-y-24" autoComplete="on">
                    <div className="flex flex-col gap-24">
                        <div className="grid gap-8">
                            <Label
                                htmlFor="firstname"
                                className="text-tavo-light"
                            >
                                Prénom
                            </Label>
                            <Input
                                id="firstname"
                                name="firstname"
                                type="text"
                                className={clsx(
                                    "bg-tavo-light",
                                    state?.errors?.firstname
                                        ? "border-red-500"
                                        : "",
                                )}
                                aria-describedby="firstname-error"
                                placeholder="firstname"
                            />
                            {state?.errors?.firstname && (
                                <p
                                    id="firstname-error"
                                    className="text-sm text-red-500"
                                >
                                    {state.errors.firstname[0]}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-8">
                            <Label htmlFor="name" className="text-tavo-light">
                                Nom
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                className={clsx(
                                    "bg-tavo-light",
                                    state?.errors?.name ? "border-red-500" : "",
                                )}
                                placeholder="name"
                                aria-describedby="name-error"
                            />
                            {state?.errors?.name && (
                                <p
                                    id="name-error"
                                    className="text-sm text-red-500"
                                >
                                    {state.errors.name[0]}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-8">
                            <Label htmlFor="email" className="text-tavo-light">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                className={clsx(
                                    "bg-tavo-light",
                                    state?.errors?.email
                                        ? "border-red-500"
                                        : "",
                                )}
                                type="text"
                                placeholder="email"
                            />
                            {state?.errors?.email && (
                                <p
                                    id="email-error"
                                    className="text-sm text-red-500"
                                >
                                    {state.errors.email[0]}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-8">
                            <Select name="object">
                                <Label
                                    htmlFor="objet"
                                    className="text-tavo-light"
                                >
                                    Objet
                                </Label>
                                <SelectTrigger className="bg-tavo-light w-full">
                                    <SelectValue placeholder="Choisissez une option:" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="msg">
                                        Laisser un message dans le livre
                                        d&apos;or
                                    </SelectItem>
                                    <SelectItem value="reservation">
                                        Demande de réservation (date, heure,
                                        nombre de personnes)
                                    </SelectItem>
                                    <SelectItem value="private">
                                        Demande d&apos;informations sur les
                                        événements privés
                                    </SelectItem>
                                    <SelectItem value="grp-reservation">
                                        Réservation pour un groupe
                                    </SelectItem>
                                    <SelectItem value="qa-food">
                                        Questions sur les ingrédients ou les
                                        allergènes
                                    </SelectItem>
                                    <SelectItem value="opt-vege">
                                        Demande d&apos;informations sur les
                                        options végétariennes/véganes
                                    </SelectItem>
                                    <SelectItem value="livraison">
                                        Commande à emporter/livraison
                                    </SelectItem>
                                    <SelectItem value="mod-command">
                                        Demande de modification de commande
                                    </SelectItem>
                                    <SelectItem value="issue-command">
                                        Problème avec une commande passée
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {state?.errors?.object && (
                                <p
                                    id="state-error"
                                    className="text-sm text-red-500"
                                >
                                    {state.errors.object[0]}
                                </p>
                            )}
                            <Textarea
                                id="text"
                                name="text"
                                autoComplete="text"
                                placeholder="Tapez votre message ici."
                                aria-describedby="text-error"
                                className={clsx(
                                    "bg-tavo-light",
                                    state?.errors?.text
                                        ? "border-red-500"
                                        : "",
                                )}
                            />
                            {state?.errors?.text && (
                                <p
                                    id="zipCode-error"
                                    className="text-sm text-red-500"
                                >
                                    {state.errors.text[0]}
                                </p>
                            )}
                        </div>
                    </div>
                    <CardFooter className={"flex flex-col text-white"}>
                        <Button
                            type="submit"
                            variant={"light"}
                            className="w-full"
                            disabled={isPending}
                        >
                            {isPending ? "Saving..." : "Submit"}
                        </Button>
                        {state?.message && <p>{state.message}</p>}
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}
