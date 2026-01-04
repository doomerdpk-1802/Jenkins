stage('install dependencies'){
    steps{
        sh 'npm ci'
    }   
}