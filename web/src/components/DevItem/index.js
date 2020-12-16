import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles.css';


function DevItem({ dev, onClick }) {


    async function handleClick(e) {
        e.preventDefault();
        await onClick({
            _id: dev._id,
        });
    }

    return (
        <li className="dev-item">
            <header>

                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>


            </header>

           
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>

            <IconButton
                    onClick={handleClick}
                    aria-label="delete"
                    value={dev._id}
                    className="delete-button"

                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
        </li>
    );
}

export default DevItem;