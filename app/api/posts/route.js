import Post from '@/models/PostModel';
import dbConnect from '@/utils/connectDb';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await dbConnect();
    const posts = await Post.find();
    console.log(posts);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error!', { status: 500 });
  }
}
