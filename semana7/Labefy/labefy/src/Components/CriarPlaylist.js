function CriarPlaylist (props){

    return (<div>
        <input onChange={props.onChangeInput} value={props.text}/>
        <button onClick={props.criarlist}>Criar Playlist</button>
        <button onClick={props.verList}>ver todas Playlists criadas</button>
        <h3>Playlists Criadas</h3>
        
    </div>

    );
}
export default CriarPlaylist