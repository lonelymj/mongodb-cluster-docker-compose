# 备份
## 进入router-01
```
docker-compose exec router-01 sh
```

## 备份admin
```
mongodump --archive="mongodump-admin-db" --db=admin
```

## 备份fastgpt
```
mongodump --archive="mongodump-fastgpt-db" --db=fastgpt
```

## 复制备份文件到宿主机
```
docker cp router-01:/mongodump-admin-db /
docker cp router-01:/mongodump-fastgpt-db /
```

# 还原
## 复制备份文件到目标容器
```
docker cp /mongodump-admin-db router-01:/
docker cp /mongodump-fastgpt-db router-01:/
```

## 进入router-01
```
docker-compose exec router-01 sh
```

## 还原admin
```
mongorestore --archive="mongodump-admin-db"
```

## 还原fastgpt
```
mongorestore --archive="mongodump-fastgpt-db"
```