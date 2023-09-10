import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '../../connection/db'
import Product from '../../models/schema'


type cartList = {
    _id: string,
    title: string,
    price: number,
    image: string,
    quantity: number,
    id: number,
}

export async function GET() {
    try{
        await connectMongoDB();
        const data : cartList[] = await Product.find();
        return NextResponse.json( data )
    }
    catch(err){
        return new NextResponse("eeror in fetching data"+ err, { status: 500})
    }
    
}