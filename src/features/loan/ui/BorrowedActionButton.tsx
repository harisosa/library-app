import { Button } from "@/components/ui/button"
import React from "react";

type BorrowedActionButtonProps = {
    isReturned: boolean;
    onGiveReview?: () => void;
    onReturn?: () => void;
}


export const BorrowedActionButton: React.FC<BorrowedActionButtonProps> = ({ isReturned, onGiveReview, onReturn }) => {
    return (<div className="shrink-0 w-full">
        {isReturned ? (
            <Button
                type="button"
                className="h-10 rounded-full px-6 w-full"
                onClick={() => onGiveReview && onGiveReview()}
            >
                Give Review
            </Button>
        )
            : (
                <Button
                    type="button"
                    variant="outline"
                    className="h-10 rounded-full px-6 w-full"
                    onClick={() => onReturn && onReturn()}
                >
                    Return
                </Button>
            )
        }

    </div>)
}