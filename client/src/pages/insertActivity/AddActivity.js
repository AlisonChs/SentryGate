import { useEffect, useState } from "react";

import { Add, Remove } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";

export function AddActivity({ selectClass, setSelectClass, selectStudent, setSelectStudent }) {
  const [arrayActivity, setArrayActivity] = useState(selectStudent.atividade);
  const [saveActivity, setSaveActivity] = useState(null);

  useEffect(() => {
    setArrayActivity(selectStudent.atividade)
    setSaveActivity(null)
  }, [selectStudent])

  function RemoveActivity() {
    const newArray = arrayActivity.length > 0 ? arrayActivity.slice(0, -1) : []
    setArrayActivity(newArray)

    const newStudent = selectStudent
    newStudent.atividade = newArray
    setSelectStudent(newStudent)
    setSaveActivity(null)
  }
  
  function AddActivity() {
    const activity = {
      id: Math.random(),
      nome: "",
      nota: 0,
      desc: '',
      obs: ''
    };
    
    setArrayActivity(prev => [...prev, activity])
    
    const newStudent = selectStudent;
    
    newStudent.atividade = [...newStudent.atividade, activity]
    
    setSelectStudent(newStudent)

    const stuIndex = selectClass.findIndex((stu) => {
      return stu.id === selectStudent.id;
    });

    const newClass = [...selectClass]

    newClass[stuIndex] = selectStudent;

    setSelectClass(newClass)
    
  }

  const changeValue = (e, id) => {
    //mudando o valor da atividade
    const actIndex = arrayActivity.findIndex((act) => {
      return act.id === id;
    });

    const newActivity = [...arrayActivity];

    newActivity[actIndex][e.target.name] = e.target.value;

    setArrayActivity(newActivity);

    //colocando as atividades no aluno
    
    const newStudent = selectStudent;

    newStudent.atividade = arrayActivity

    setSelectStudent(newStudent)

    // 

    const stuIndex = selectClass.findIndex((stu) => {
      return stu.id === selectStudent.id;
    });

    const newClass = [...selectClass];

    newClass[stuIndex] = selectStudent;
    
    setSelectClass(newClass);
  }


  return (
    <div className="containerActivity">
      <div className="studentContainer">
        <div className="photoStudent">
          <Avatar 
            alt="Foto do Aluno"
            src="https://github.com/Victor-HM.png"
            sx={{ height: 120, width: 120 }}
          />
        </div>

        <div className="infoStudent">
          <p>{selectStudent.nome}</p>
          <p>RM: <span>{selectStudent.rm}</span></p>
          <p>Presença: <span>{selectStudent.presenca}</span></p>
        </div>
      </div>

      <div className="insertActivity">
        <div className="addActivity">
          <p>Avaliações</p>

          <div className="inputAvaliacao">
            {selectStudent.atividade.map((list) => {
              return (
                <div
                  key={list.id}
                  className="input"
                  onClick={() => {
                    setSaveActivity({});
                    setSaveActivity(list);
                  }}
                >
                  <p>{list.nome}</p>
                  <Divider orientation="vertical" flexItem />
                  <p>{list.nota}</p>
                </div>
              );
            })}
          </div>

          <div className="DividerButton">
            <button
              className="btnAdd"
              onClick={AddActivity}
              // onClick={() => setArrayActivity((prev) => [...prev, AddActivity()])}
            >
              <Add />
            </button>

            <button
              className="btnAdd"
              onClick={RemoveActivity}
              // onClick={() => setArrayActivity((prev) => [...prev, AddActivity()])}
            >
              <Remove />
            </button>

          </div>

        </div>

        {saveActivity != null ? (
          <div className="avaliacaoContainer">
            <div className="dividerActivity">
              <input
                type="text"
                placeholder="Nome da avaliação"
                value={saveActivity.nome}
                name='nome'
                onChange={(e) => changeValue(e, saveActivity.id)}
              />
              <input
                type="number"
                placeholder="Nota"
                value={saveActivity.nota}
                name='nota'
                onChange={(e) => changeValue(e, saveActivity.id)}
              />
            </div>
            <input 
              type="text" 
              placeholder="Descrição"
              value={saveActivity.desc}
              name='desc'
              onChange={(e) => changeValue(e, saveActivity.id)} 
            />
            <input 
              type="text" 
              placeholder="Observações"
              value={saveActivity.obs}
              name='obs'
              onChange={(e) => changeValue(e, saveActivity.id)} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
