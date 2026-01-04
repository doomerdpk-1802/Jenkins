stage('Test') {
    sh '''
      echo "Running tests..."
      npm test
    '''
}
