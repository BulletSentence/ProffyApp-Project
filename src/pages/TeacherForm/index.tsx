import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader/";
import Input from "../../components/Input/";
import Textarea from "../../components/Textarea/";
import Select from "../../components/Select/";

import warningIcon from "../../assets/images/icons/warning.svg";

export default function TeacherForm() {
  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulario de inscrição."
      />

      <main>
        <fieldset>
          <legend>Your info</legend>
          <Input name="name" label="Name" />
          <Input name="avatar" label="Picture" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Bio" />
        </fieldset>

        <fieldset>
          <legend>About the Classes</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Arts", label: "Artes" },
              { value: "Bio", label: "Biologia" },
              { value: "Geo", label: "Geografia" },
              { value: "Math", label: "Matematica" },
              { value: "Engish", label: "Ingles" },
              { value: "History", label: "Historia" },
              { value: "Phisics", label: "Fisica" },
              { value: "Port", label: "Portugues" },
              { value: "Chemistry", label: "Quimica" },
            ]}
          />
          <Input name="cost" label="Cost per hour" />
        </fieldset>

        <fieldset>
          <legend>
            Avaliable Time
            <button type="button">+ New Time</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Dia da Semana"
              options={[
                { value: "0", label: "Sunday" },
                { value: "1", label: "Monday" },
                { value: "2", label: "Tuesday" },
                { value: "3", label: "Wednesday" },
                { value: "4", label: "Thrusday" },
                { value: "5", label: "Friday" },
                { value: "6", label: "Saturday" },
              ]}
            />
            <Input name="from" label="From" type="time" />
            <Input name="to" label="To" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Important <br />
            Fill all places
          </p>
          <button type="button">Save</button>
        </footer>
      </main>
    </div>
  );
}
