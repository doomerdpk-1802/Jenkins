stage('lint') {
    steps{
       sh 'yarn lint'
    }    
}