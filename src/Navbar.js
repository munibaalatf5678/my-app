// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navbarStyle = {
        backgroundColor: '#6A0DAD', // Purple background color
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const titleStyle = {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        marginRight: 'auto', // Aligns title to the left
    };

    const navLinksStyle = {
        display: 'flex',
        gap: '20px', // Space between each link
    };

    const navItemStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    const navItemHoverStyle = {
        color: '#D8BFD8', // Light purple on hover
    };

    return (
        <nav style={navbarStyle}>
            <div style={titleStyle}>MiniMind Hub</div>
            <div style={navLinksStyle}>
                <Link to="/" style={navItemStyle} onMouseEnter={(e) => e.target.style.color = navItemHoverStyle.color} onMouseLeave={(e) => e.target.style.color = navItemStyle.color}>Home</Link>
                <Link to="/story-details" style={navItemStyle} onMouseEnter={(e) => e.target.style.color = navItemHoverStyle.color} onMouseLeave={(e) => e.target.style.color = navItemStyle.color}>Story Quiz</Link>
                <Link to="/story-details2" style={navItemStyle} onMouseEnter={(e) => e.target.style.color = navItemHoverStyle.color} onMouseLeave={(e) => e.target.style.color = navItemStyle.color}>Upload stories</Link>
                <Link to="/islamic" style={navItemStyle} onMouseEnter={(e) => e.target.style.color = navItemHoverStyle.color} onMouseLeave={(e) => e.target.style.color = navItemStyle.color}>Islamic</Link>
                <Link to="/Deaf" style={navItemStyle} onMouseEnter={(e) => e.target.style.color = navItemHoverStyle.color} onMouseLeave={(e) => e.target.style.color = navItemStyle.color}>Deaf</Link>
                <Link to="/Deaf2" style={navItemStyle} onMouseEnter={(e) => e.target.style.color = navItemHoverStyle.color} onMouseLeave={(e) => e.target.style.color = navItemStyle.color}>Learn Signs</Link>
                <Link to="/Deaf3" style={navItemStyle} onMouseEnter={(e) => e.target.style.color = navItemHoverStyle.color} onMouseLeave={(e) => e.target.style.color = navItemStyle.color}>Signs Quiz</Link>
                <Link to="/Deaf4" style={navItemStyle} onMouseEnter={(e) => e.target.style.color = navItemHoverStyle.color} onMouseLeave={(e) => e.target.style.color = navItemStyle.color}>ABC signs</Link>
            </div>
        </nav>
    );
}

export default Navbar;
