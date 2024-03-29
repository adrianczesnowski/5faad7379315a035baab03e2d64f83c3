import React from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading: boolean;
    text: string;
}