import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table() {
    return (
        <div>
            <table border = "1">
                <TableHeader />
                <TableBody />
            </table>
        </div>
    )
}