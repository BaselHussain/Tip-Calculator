"use client";

import { useState, ChangeEvent } from "react";
import {
  Card,CardHeader,CardTitle,CardDescription,CardContent,CardFooter,} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { stringify } from "querystring";


export default function TipCalculatorComponent() {
const [billAmount,setBillAmount]=useState<number|null>(null)
const [tipPercentage,setTipPercentage]=useState<number|null>(null)
const [tipAmount,setTipAmount]=useState<number>(0)
const [totalAmount,setTotalAmount]=useState<number>(0)

const handleBillAountChange=(e:ChangeEvent<HTMLInputElement>):void=>{
setBillAmount(parseFloat(e.target.value))
}

const handleTipPercentageChange=(e:ChangeEvent<HTMLInputElement>):void=>{
    setTipPercentage(parseFloat(e.target.value))
    }

const calculate=():void=>{
    if( billAmount!==null &&  tipPercentage!==null){
        const tip=billAmount * (tipPercentage/100)
        setTipAmount(tip)
        setTotalAmount(billAmount+tip)
    }

    
}
const clear=():void=>{
        setBillAmount(null)
        setTipPercentage(null)
        setTipAmount(0);
    setTotalAmount(0);
        }

return(
    <>
    <div className="flex h-screen justify-center items-center bg-gradient-to-tl from-[#c4d42b] to-[#c70586]">
<Card className="p-4 w-full max-w-md z-50 shadow-2xl">
<CardHeader>
    <CardTitle className="text-2xl">Tip Calculator</CardTitle>
    <CardDescription>Enter the bill amount and tip percentage to calculate tip amount total amount</CardDescription>
</CardHeader>
<CardContent>
    <div className="space-y-5">
        <div>
        <Label className="font-bold">Bill Amount</Label>
        <Input
        placeholder="Enter bill amount"
        onChange={handleBillAountChange}
        value={billAmount!==null?billAmount:""}
        type="number"/>
</div>
<div>
<Label className="font-bold">Tip Percentage</Label>
        <Input
        placeholder="Enter tip percentage"
        onChange={handleTipPercentageChange}
        value={tipPercentage!==null?tipPercentage:""}
        type="number"/>
</div>
<div className="flex justify-between w-full">
<Button className="font-semibold"
onClick={calculate}>
    Calculate
</Button>
<Button className="font-semibold"
onClick={clear}
>
    Clear
</Button>
</div>

    </div>
</CardContent>
<CardFooter>
    <div className="w-full space-y-3">
    <div className="flex justify-between w-full">
        <span className="font-bold text-xl">Tip Amount:</span>
        <span className="font-bold text-xl">{`$${tipAmount.toFixed(2)}`}</span>
    </div>
    <div className="flex justify-between w-full">
        <span className="font-bold text-xl">Total Amount:</span>
        <span className="font-bold text-xl">{`$${totalAmount.toFixed(2)}`}</span>
    </div>
    </div>
</CardFooter>
</Card>
    </div>
    </>
)

}