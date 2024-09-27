import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Janvee Kohli</h1>
            <p>
                Check out my GitHub repository: 
                <Link href="https://github.com/janveekohli/cprg-306-assignments" passHref>
                    <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                        janveekohli
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default StudentInfo;
