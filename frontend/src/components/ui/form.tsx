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
import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        firstname: "",
        name: "",
        email: "",
        message: "",
        objet: "",
        error: "",
    });

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const res = await fetch("http://127.0.0.1:8000/api/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Failed to submit form");
            setFormData({
                ...formData,
                error: "Message envoyé avec succès",
            });
        } catch (err) {
            setFormData({ ...formData, error: "Échec de l&apos;envoi" });
        }
    }
    return (
        <Card className="w-full max-w-lg mx-auto bg-tavo-dark rounded-xl border-2 shadow-sm">
            <CardHeader>
                <h1 className="text-tavo-light text-7xl font-black uppercase leading-none">
                    Contact Us
                </h1>
                <p className="text-sm text-tavo-light">Please enter your messages below.</p>
            </CardHeader>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-24"
                >
                    <div className="flex flex-col gap-24">
                        <div className="grid gap-8">
                            <Label htmlFor="firstname" className="text-tavo-light">
                                Prénom
                            </Label>
                            <Input
                                id="firstname"
                                type="text"
                                className="bg-tavo-light"
                                placeholder="firstname"
                                value={formData.firstname}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        firstname: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="grid gap-8">
                            <Label htmlFor="name" className="text-tavo-light">
                                Nom
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                className="bg-tavo-light"
                                placeholder="name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="grid gap-8">
                            <Label htmlFor="email" className="text-tavo-light">
                                Email
                            </Label>
                            <Input
                                id="email"
                                className="bg-tavo-light"
                                type="text"
                                placeholder="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="grid gap-8">
                            <Select
                                defaultValue={formData.objet}
                                onValueChange={(value) =>
                                    setFormData({
                                        ...formData,
                                        objet: value,
                                    })
                                }
                            >
                                <Label htmlFor="objet" className="text-tavo-light">
                                    Objet
                                </Label>
                                <SelectTrigger className="bg-tavo-light w-full">
                                    <SelectValue placeholder="Choisissez une option:" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="msg">
                                        Laisser un message dans le livre d&apos;or
                                    </SelectItem>
                                    <SelectItem value="reservation">
                                        Demande de réservation (date, heure, nombre
                                        de personnes)
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
                                        Demande d&apos;informations sur les options
                                        végétariennes/véganes
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
                            <Textarea
                                placeholder="Tapez votre message ici."
                                className="bg-tavo-light"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <CardFooter>
                        <Button type="submit" variant={"light"} className="w-full">
                            Envoyer
                        </Button>
                        {formData.error && <p>{formData.error}</p>}
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}
