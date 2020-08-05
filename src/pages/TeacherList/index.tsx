import React from "react";
import "./styles.css";

import PageHeader from "../../components/PageHeader/";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function TeacherList() {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="This are our Proffys.">
        <form id="search-teachers">
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

          <Input name="time" label="Time" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
