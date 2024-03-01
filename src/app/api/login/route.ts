import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const { username, password }: { username: string, password: string } = await request.json()
    if (!username || !password) {
        return NextResponse.json({ error: "Username or password is missing" }, { status: 400 })
    }

    const response = await fetch('https://api.origamid.online/conta/login', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ username, password }),
    })

    if (response.ok) {
        const { token }: { token: string } = await response.json()
        cookies().set('token', token, { httpOnly: true, secure: true })
        return NextResponse.json(token, { status: 200 })
    } else {
        return NextResponse.json({ message: 'Verifique suas credenciais' }, { status: 400 })
    }

}