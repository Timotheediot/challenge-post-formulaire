import React from 'react'


class Formulaire extends React.Component{
        state = {
            title: '',
            poster: '',
            comment: '',
        }

    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

    submitForm = (e) => {
        e.preventDefault();
        const url = "https://post-a-form.herokuapp.com/api/movies/";
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        }

        fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
              alert(res.error);
            } else {
              alert(`Employé ajouté avec l'ID ${res}!`);
            }
          }).catch(e => {
            console.error(e);
            alert("Erreur lors de l'ajout d'un employé");
          });
        }

    render() {
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <input type='text' id="title" name="title" onChange={this.onChange} value={this.state.title} />
                        <input type='url' id="poster" name="poster" onChange={this.onChange} value={this.state.poster} />
                        <textarea type="text" id='comment' name='comment' onChange={this.onChange} value={this.state.comment} />
                        <input type="submit" value="Envoyer" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Formulaire 