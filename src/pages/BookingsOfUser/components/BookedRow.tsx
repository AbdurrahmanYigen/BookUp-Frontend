
import React from 'react';
import moment from 'moment';

export enum Status {
    Inprocess,
    Done
}


export type BookItemProps = {
    booking: Booking;
    fetchBookings: () => void;
    userid: number;
}

export type EventType = {
    id: number;
    title: string;
    description: string;
    duration: number;
    link: string;
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
}

export type Invitee = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
}
export type Booking = {
    id: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    date: Date,
    eventType: EventType,
    status: Status,
    invitee: Invitee
}

export const BookedRow: React.FC<BookItemProps> = ({
    booking, fetchBookings, userid
}) => {
    
    return (
        <form action="" style={{ display: 'flex', justifyContent: 'space-evenly', position: 'relative' }}>
            <div>
                <p>{moment(booking.date).subtract(1,"hours").format("HH:mm")} - {moment(booking.date).subtract(1,"hours").add(booking.eventType.duration, "minutes").format("HH:mm")}</p>
                <p>{booking.invitee.firstName}</p>
                <p>{booking.invitee.lastName}</p>
            </div>
        </form>
    )
}