import { NextResponse } from 'next/server';
import connectMongoDB from '../../connection/db'
import Product from '../../models/schema'




export async function GET(request, response) {
    try{
        await connectMongoDB();
        const data = await Product.find();
        return NextResponse.json({ data })
    }
    catch(err){
        return new NextResponse("eeror in fetching data"+ err, { status: 500})
    }
    
}