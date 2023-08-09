import Post from '@/models/PostModel';
import dbConnect from '@/utils/connectDb';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await dbConnect();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error!', { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await dbConnect();
    await Post.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error!', { status: 500 });
  }
}
