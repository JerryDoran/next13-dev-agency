import Post from '@/models/PostModel';
import dbConnect from '@/utils/connectDb';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  try {
    await dbConnect();
    const posts = await Post.find(username && { username });
    // console.log(posts);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error!', { status: 500 });
  }
}

export async function POST(request) {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await dbConnect();
    await newPost.save();
    // console.log(posts);
    return new NextResponse('Post has been created', { status: 201 });
  } catch (error) {
    return new NextResponse('Database Error!', { status: 500 });
  }
}
