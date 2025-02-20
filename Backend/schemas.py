from pydantic import BaseModel

class TaskBase(BaseModel):
    tarea: str
    completed: bool = False

class TaskCreate(TaskBase):
    pass

class TaskResponse(TaskBase):
    id: int

    class Config:
        orm_mode = True
